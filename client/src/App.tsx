/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Routes support a calm editorial publication with clear escape paths from every article and guide.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Article from "./pages/Article";
import GuideIndex from "./pages/GuideIndex";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles/mixed-saltwater-blueprint" component={Article} />
      <Route path="/start-here" component={GuideIndex} />
      <Route path="/guides" component={GuideIndex} />
      <Route path="/guides/:slug" component={GuideIndex} />
      <Route path="/troubleshoot" component={GuideIndex} />
      <Route path="/search" component={GuideIndex} />
      <Route path="/editorial-standards" component={GuideIndex} />
      <Route path="/disclosure" component={GuideIndex} />
      <Route path="/about" component={GuideIndex} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
