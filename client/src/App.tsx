/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Routes support a calm editorial publication with clear escape paths from every article and guide.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Article from "./pages/Article";
import GuideIndex from "./pages/GuideIndex";
import PublicationInfo from "./pages/PublicationInfo";
import Troubleshoot from "./pages/Troubleshoot";
import NotFound from "./pages/NotFound";

function PublicationRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/start-here" component={GuideIndex} />
      <Route path="/guides" component={GuideIndex} />
      <Route path="/guides/:slug" component={GuideIndex} />
      <Route path="/troubleshoot" component={Troubleshoot} />
      <Route path="/editorial-standards" component={PublicationInfo} />
      <Route path="/disclosure" component={PublicationInfo} />
      <Route path="/about" component={PublicationInfo} />
      <Route path="/privacy" component={PublicationInfo} />
      <Route path="/contact" component={PublicationInfo} />
      <Route component={NotFound} />
    </Switch>
  );
}

type AppProps = { ssrPath?: string };

export default function App({ ssrPath }: AppProps) {
  const publication = (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <PublicationRouter />
      </TooltipProvider>
    </ThemeProvider>
  );

  return (
    <ErrorBoundary>
      {ssrPath ? <WouterRouter ssrPath={ssrPath}>{publication}</WouterRouter> : publication}
    </ErrorBoundary>
  );
}
