import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { format, subDays, startOfDay, eachDayOfInterval } from "date-fns";

interface Booking {
  id: string;
  contact_name: string;
  tour_name: string;
  total_price: number;
  status: string;
  created_at: string;
}

interface AdminChartsProps {
  bookings: Booking[];
}

const STATUS_COLORS: Record<string, string> = {
  confirmed: "hsl(142, 71%, 45%)",
  completed: "hsl(217, 91%, 60%)",
  pending: "hsl(45, 93%, 47%)",
  cancelled: "hsl(0, 84%, 60%)",
  refunded: "hsl(270, 50%, 60%)",
};

const AdminCharts = ({ bookings }: AdminChartsProps) => {
  // Daily bookings & revenue for the last 30 days
  const dailyData = useMemo(() => {
    const today = startOfDay(new Date());
    const thirtyDaysAgo = subDays(today, 29);
    const days = eachDayOfInterval({ start: thirtyDaysAgo, end: today });

    return days.map(day => {
      const dayStr = format(day, "yyyy-MM-dd");
      const dayBookings = bookings.filter(
        b => format(new Date(b.created_at), "yyyy-MM-dd") === dayStr
      );
      return {
        date: format(day, "MMM dd"),
        bookings: dayBookings.length,
        revenue: dayBookings
          .filter(b => b.status === "confirmed" || b.status === "completed")
          .reduce((sum, b) => sum + (b.total_price || 0), 0),
      };
    });
  }, [bookings]);

  // Status distribution for pie chart
  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    bookings.forEach(b => {
      const s = b.status || "pending";
      counts[s] = (counts[s] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
      color: STATUS_COLORS[name] || "hsl(0, 0%, 60%)",
    }));
  }, [bookings]);

  // Top tours by booking count
  const topTours = useMemo(() => {
    const counts: Record<string, { count: number; revenue: number }> = {};
    bookings.forEach(b => {
      const name = b.tour_name || "Unknown";
      if (!counts[name]) counts[name] = { count: 0, revenue: 0 };
      counts[name].count++;
      counts[name].revenue += b.total_price || 0;
    });
    return Object.entries(counts)
      .map(([name, data]) => ({ name: name.length > 25 ? name.slice(0, 22) + "..." : name, ...data }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [bookings]);

  if (bookings.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Booking Trends Line Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base">Booking Trends (Last 30 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="bookings"
                name="Bookings"
                stroke="hsl(217, 91%, 60%)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Daily Revenue (₹)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Status Distribution Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Booking Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Tours Bar Chart */}
      {topTours.length > 0 && (
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Most Popular Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topTours} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" tick={{ fontSize: 11 }} allowDecimals={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={150} />
                <Tooltip formatter={(value: number, name: string) =>
                  name === "revenue" ? [`₹${value.toLocaleString()}`, "Revenue"] : [value, "Bookings"]
                } />
                <Legend />
                <Bar dataKey="count" name="Bookings" fill="hsl(217, 91%, 60%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminCharts;
