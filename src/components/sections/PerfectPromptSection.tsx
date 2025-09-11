import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Copy, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const promptFormula = [
  {
    element: "Context",
    description: "Set the scene",
    example: "Create a mobile app for college students...",
    color: "primary"
  },
  {
    element: "Function",
    description: "What it does",
    example: "...that helps track study habits and rewards progress...",
    color: "secondary"
  },
  {
    element: "Style",
    description: "Look & feel",
    example: "...with a colorful, gamified interface like Pokemon Go...",
    color: "accent"
  },
  {
    element: "Details",
    description: "Specific features",
    example: "...including streak counters, achievement badges, and study timer.",
    color: "primary"
  }
];

const examples = {
  good: {
    text: "Create a habit tracking app for busy professionals that gamifies daily routines like a retro arcade game. Include pixelated graphics, 8-bit sound effects, achievement unlocks for streak milestones, and a leaderboard to compete with colleagues. Add power-ups for maintaining streaks and boss battles for breaking bad habits.",
    reasons: ["Specific target audience", "Clear functionality", "Detailed visual style", "Multiple engaging features", "Creative metaphors"]
  },
  bad: {
    text: "Make an app that tracks things and looks good.",
    reasons: ["Too vague", "No target audience", "Unclear functionality", "No style guidance", "Missing features"]
  }
};

export default function PerfectPromptSection() {
  const { toast } = useToast();
  const [userPrompt, setUserPrompt] = useState('');
  const [promptElements, setPromptElements] = useState({
    context: '',
    function: '',
    style: '',
    details: ''
  });

  const buildPrompt = () => {
    const { context, function: func, style, details } = promptElements;
    
    if (!context || !func) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least Context and Function fields.",
        variant: "destructive"
      });
      return;
    }

    // Generate basic structured prompt
    const basicPrompt = `${context} ${func}${style ? ` ${style}` : ''}${details ? ` ${details}` : ''}`.trim();
    setUserPrompt(basicPrompt);
    
    toast({
      title: "Prompt Generated! 🎯",
      description: "Your basic prompt is ready! Use refinement tools to enhance it.",
    });
  };

  const openRefinementTool = (toolUrl: string, toolName: string) => {
    if (!userPrompt) return;
    
    // Copy to clipboard
    navigator.clipboard.writeText(userPrompt);
    
    // Open tool
    window.open(toolUrl, '_blank');
    
    // Show instruction
    toast({
      title: `Prompt copied! 📋`,
      description: `Paste it in ${toolName} and ask: "Please make this prompt more detailed and specific for AI app builders like Lovable AI, Replit, and Tempo Labs."`,
      duration: 6000
    });
  };

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied! 📋",
      description: "Prompt copied to clipboard - ready for AI!",
    });
  };

  const updateElement = (key: string, value: string) => {
    setPromptElements(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="perfect-prompt" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Writing the Perfect Prompt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of AI communication! Learn the secret formula that turns your ideas 
            into detailed, buildable instructions. 🎯
          </p>
        </div>

        {/* Formula Breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            The Magic Formula ✨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promptFormula.map((element, index) => (
              <Card key={index} className="border-0 bg-card/80 hover-lift">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    element.color === 'primary' ? 'bg-gradient-primary' :
                    element.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'
                  }`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{element.element}</CardTitle>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm italic text-muted-foreground">
                      {element.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Prompt Builder */}
        <Card className="mb-16 border-0 bg-gradient-hero/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl gradient-text">
              🛠️ Interactive Prompt Builder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {promptFormula.map((element, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {index + 1}. {element.element} - {element.description}
                </label>
                <Textarea
                  placeholder={element.example}
                  value={promptElements[element.element.toLowerCase() as keyof typeof promptElements]}
                  onChange={(e) => updateElement(element.element.toLowerCase(), e.target.value)}
                  className="bg-card"
                />
              </div>
            ))}
            
            <div className="text-center">
              <Button 
                onClick={buildPrompt}
                className="bg-gradient-primary text-white px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Build My Prompt
              </Button>
            </div>

            {userPrompt && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Your AI-Ready Prompt:
                  </label>
                  <div className="relative">
                    <Textarea
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      className="bg-primary/5 border-primary/20 min-h-[100px] pr-12"
                    />
                    <Button
                      size="sm"
                      onClick={() => copyPrompt(userPrompt)}
                      className="absolute top-2 right-2"
                      variant="outline"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-hero/10 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground text-center">
                    🔧 Want to make your prompt even better? Choose a refinement tool:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      onClick={() => openRefinementTool('https://claude.ai/chat', 'Claude.ai')}
                      className="flex flex-col items-center p-4 h-auto bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <span className="text-2xl mb-2">🤖</span>
                      <span className="font-semibold">Claude.ai</span>
                      <span className="text-sm opacity-90">Get professional refinement</span>
                    </Button>
                    
                    <Button
                      onClick={() => openRefinementTool('https://chat.openai.com/', 'ChatGPT')}
                      className="flex flex-col items-center p-4 h-auto bg-green-600 hover:bg-green-700 text-white"
                    >
                      <span className="text-2xl mb-2">💬</span>
                      <span className="font-semibold">ChatGPT</span>
                      <span className="text-sm opacity-90">Enhance with AI</span>
                    </Button>
                    
                    <Button
                      onClick={() => openRefinementTool('https://gemini.google.com/app', 'Gemini')}
                      className="flex flex-col items-center p-4 h-auto bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <span className="text-2xl mb-2">⚡</span>
                      <span className="font-semibold">Gemini</span>
                      <span className="text-sm opacity-90">Quick improvements</span>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Good vs Bad Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Good Example */}
          <Card className="border-0 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                <CheckCircle className="w-6 h-6 mr-3" />
                ✅ Great Prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-4">
                <p className="text-sm text-green-800 dark:text-green-200 italic">
                  "{examples.good.text}"
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-green-700 dark:text-green-300">Why it works:</p>
                {examples.good.reasons.map((reason, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2 bg-green-200 text-green-800">
                    {reason}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bad Example */}
          <Card className="border-0 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <XCircle className="w-6 h-6 mr-3" />
                ❌ Weak Prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mb-4">
                <p className="text-sm text-red-800 dark:text-red-200 italic">
                  "{examples.bad.text}"
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-red-700 dark:text-red-300">Problems:</p>
                {examples.bad.reasons.map((reason, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2 bg-red-200 text-red-800">
                    {reason}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}