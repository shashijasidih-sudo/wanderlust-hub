import { Component, type ReactNode, type ErrorInfo } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recoverChunkLoad } from "@/lib/chunkRecovery";

export default class ChunkErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo) {
    recoverChunkLoad(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="container mx-auto px-4 py-8 text-center">
        <p className="text-foreground mb-4">This page couldn’t finish loading. Please try again.</p>
        <Button onClick={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4 mr-2" /> Try again
        </Button>
      </div>
    );
  }
}