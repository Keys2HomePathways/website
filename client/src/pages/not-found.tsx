import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <div className="flex justify-center">
            <AlertCircle className="h-16 w-16 text-primary opacity-20" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-900">404 Page Not Found</h1>
            <p className="text-gray-500">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>

          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
