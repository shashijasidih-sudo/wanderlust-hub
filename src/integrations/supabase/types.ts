export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      booking_items: {
        Row: {
          activity_name: string
          activity_slug: string | null
          adults: number
          airline: string | null
          booking_id: string
          children: number
          country: string | null
          created_at: string
          currency: string
          destination: string | null
          drop_location: string | null
          flight_number: string | null
          hotel_name: string | null
          id: string
          image_url: string | null
          item_details: Json
          meeting_point: string | null
          pickup_location: string | null
          pickup_required: boolean
          pickup_time: string | null
          pickup_type: string | null
          price: number
          product_id: string | null
          product_type: string
          quantity: number
          special_requests: string | null
          status: string
          supplier_reference: string | null
          terminal: string | null
          travel_date: string | null
          updated_at: string
          voucher_number: string | null
          voucher_url: string | null
        }
        Insert: {
          activity_name: string
          activity_slug?: string | null
          adults?: number
          airline?: string | null
          booking_id: string
          children?: number
          country?: string | null
          created_at?: string
          currency?: string
          destination?: string | null
          drop_location?: string | null
          flight_number?: string | null
          hotel_name?: string | null
          id?: string
          image_url?: string | null
          item_details?: Json
          meeting_point?: string | null
          pickup_location?: string | null
          pickup_required?: boolean
          pickup_time?: string | null
          pickup_type?: string | null
          price?: number
          product_id?: string | null
          product_type?: string
          quantity?: number
          special_requests?: string | null
          status?: string
          supplier_reference?: string | null
          terminal?: string | null
          travel_date?: string | null
          updated_at?: string
          voucher_number?: string | null
          voucher_url?: string | null
        }
        Update: {
          activity_name?: string
          activity_slug?: string | null
          adults?: number
          airline?: string | null
          booking_id?: string
          children?: number
          country?: string | null
          created_at?: string
          currency?: string
          destination?: string | null
          drop_location?: string | null
          flight_number?: string | null
          hotel_name?: string | null
          id?: string
          image_url?: string | null
          item_details?: Json
          meeting_point?: string | null
          pickup_location?: string | null
          pickup_required?: boolean
          pickup_time?: string | null
          pickup_type?: string | null
          price?: number
          product_id?: string | null
          product_type?: string
          quantity?: number
          special_requests?: string | null
          status?: string
          supplier_reference?: string | null
          terminal?: string | null
          travel_date?: string | null
          updated_at?: string
          voucher_number?: string | null
          voucher_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_items_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          adults: number
          booking_number: string | null
          children: number
          contact_email: string
          contact_name: string
          contact_phone: string | null
          created_at: string
          currency: string
          id: string
          item_details: Json
          payment_status: string
          special_requests: string | null
          status: string
          total_price: number
          tour_date: string | null
          tour_name: string
          tour_slug: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          adults?: number
          booking_number?: string | null
          children?: number
          contact_email: string
          contact_name?: string
          contact_phone?: string | null
          created_at?: string
          currency?: string
          id?: string
          item_details?: Json
          payment_status?: string
          special_requests?: string | null
          status?: string
          total_price?: number
          tour_date?: string | null
          tour_name?: string
          tour_slug?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          adults?: number
          booking_number?: string | null
          children?: number
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          created_at?: string
          currency?: string
          id?: string
          item_details?: Json
          payment_status?: string
          special_requests?: string | null
          status?: string
          total_price?: number
          tour_date?: string | null
          tour_name?: string
          tour_slug?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: { _uid: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
