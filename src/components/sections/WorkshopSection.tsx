import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, Download, Lightbulb, Users, Palette, Plus, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function WorkshopSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    who: '',
    what: '',
    style: '',
    extras: '',
    finalIdea: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateIdea = () => {
    const { who, what, style, extras } = formData;
    if (!who || !what) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the WHO and WHAT fields to generate your idea.",
        variant: "destructive"
      });
      return;
    }

    const idea = `Create a ${what} for ${who} with a ${style || 'modern'} design${extras ? ` that includes ${extras}` : ''}.`;
    setFormData(prev => ({ ...prev, finalIdea: idea }));
    
    toast({
      title: "Idea Generated! ✨",
      description: "Your creative concept is ready for AI building!",
    });
  };

  const refineIdea = () => {
    if (!formData.finalIdea) {
      toast({
        title: "No Idea to Refine",
        description: "Please generate an idea first or write your own in the text area.",
        variant: "destructive"
      });
      return;
    }

    // Simple AI-powered refinement logic
    const enhancements = [
      "with intuitive user interface and smooth animations",
      "featuring personalized recommendations and smart notifications",
      "including data analytics dashboard and progress tracking",
      "with social features for community engagement",
      "supporting offline functionality and cloud sync",
      "with accessibility features and multi-language support"
    ];
    
    const randomEnhancement = enhancements[Math.floor(Math.random() * enhancements.length)];
    const refinedIdea = `${formData.finalIdea.replace('.', '')} ${randomEnhancement}. The app should prioritize user experience with clean navigation, responsive design, and engaging micro-interactions that delight users at every step.`;
    
    setFormData(prev => ({ ...prev, finalIdea: refinedIdea }));
    
    toast({
      title: "Idea Refined! ✨",
      description: "Your idea has been enhanced with additional details and structure.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied! 📋",
      description: "Your idea has been copied to clipboard.",
    });
  };

  const downloadIdea = () => {
    const content = `My Vibe Coding Project Idea\n\nWHO: ${formData.who}\nWHAT: ${formData.what}\nSTYLE: ${formData.style}\nEXTRAS: ${formData.extras}\n\nFINAL IDEA:\n${formData.finalIdea}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-vibe-coding-idea.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded! 💾",
      description: "Your idea has been saved as a text file.",
    });
  };

  const refineWithClaude = () => {
    if (!formData.finalIdea) {
      toast({
        title: "No Idea to Refine",
        description: "Please generate an idea first or write your own in the text area.",
        variant: "destructive"
      });
      return;
    }

    const prompt = `Please enhance this app/tool idea by making it more specific and detailed. Add information about:
- Target audience (who will use this?)
- Key features (what exactly will it do?)
- Design style (colors, mood, interface style)
- Special functionality (any unique elements?)

Original idea: ${formData.finalIdea}

Please provide a complete, detailed description that would work perfectly for AI app builders like Lovable AI.`;

    const encodedPrompt = encodeURIComponent(prompt);
    const claudeUrl = `https://claude.ai/chat/new?q=${encodedPrompt}`;
    
    window.open(claudeUrl, '_blank');
    
    toast({
      title: "Opening Claude! 🤖",
      description: "Claude.ai will open with your idea ready for professional refinement.",
    });
  };

  return (
    <section id="workshop" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Your Creative Workshop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's craft your unique app idea using our proven framework. 
            Fill in each section to build something amazing! 🎨
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WHO Section */}
          <Card className="border-0 bg-primary-muted/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="w-6 h-6 mr-3" />
                WHO is this for?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="who" className="text-sm text-muted-foreground mb-2 block">
                Target audience (e.g., "busy students", "fitness beginners", "creative kids")
              </Label>
              <Input
                id="who"
                placeholder="Who will use your app?"
                value={formData.who}
                onChange={(e) => handleInputChange('who', e.target.value)}
                className="bg-card"
              />
            </CardContent>
          </Card>

          {/* WHAT Section */}
          <Card className="border-0 bg-secondary-muted/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-secondary">
                <Lightbulb className="w-6 h-6 mr-3" />
                WHAT does it do?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="what" className="text-sm text-muted-foreground mb-2 block">
                Core functionality (e.g., "habit tracker", "language learning game", "mood journal")
              </Label>
              <Input
                id="what"
                placeholder="What's the main purpose?"
                value={formData.what}
                onChange={(e) => handleInputChange('what', e.target.value)}
                className="bg-card"
              />
            </CardContent>
          </Card>

          {/* STYLE Section */}
          <Card className="border-0 bg-accent-muted/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <Palette className="w-6 h-6 mr-3" />
                STYLE & Vibe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="style" className="text-sm text-muted-foreground mb-2 block">
                Visual style & feeling (e.g., "retro gaming", "minimalist zen", "colorful cartoon")
              </Label>
              <Input
                id="style"
                placeholder="What's the visual vibe?"
                value={formData.style}
                onChange={(e) => handleInputChange('style', e.target.value)}
                className="bg-card"
              />
            </CardContent>
          </Card>

          {/* EXTRAS Section */}
          <Card className="border-0 bg-primary-muted/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Plus className="w-6 h-6 mr-3" />
                EXTRAS & Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="extras" className="text-sm text-muted-foreground mb-2 block">
                Special features (e.g., "social sharing", "achievements", "voice notes", "themes")
              </Label>
              <Input
                id="extras"
                placeholder="Any special features?"
                value={formData.extras}
                onChange={(e) => handleInputChange('extras', e.target.value)}
                className="bg-card"
              />
            </CardContent>
          </Card>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={generateIdea}
            size="lg"
            className="bg-gradient-primary text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform glow"
          >
            ✨ Generate My Idea
          </Button>
        </div>

        {/* Final Idea Output */}
        <Card className="border-2 border-dashed border-primary/30">
          <CardHeader>
            <CardTitle className="text-center gradient-text">
              Your Amazing App Idea 🚀
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="finalIdea" className="text-sm text-muted-foreground mb-2 block">
              Refine your idea or use the generated version:
            </Label>
            <Textarea
              id="finalIdea"
              placeholder="Your generated idea will appear here, or write your own custom description..."
              value={formData.finalIdea}
              onChange={(e) => handleInputChange('finalIdea', e.target.value)}
              className="min-h-[120px] bg-muted/50 text-lg"
            />
            
            {formData.finalIdea && (
              <div className="flex justify-center flex-wrap gap-3 mt-6">
                <Button
                  onClick={refineIdea}
                  variant="default"
                  className="flex items-center space-x-2 bg-gradient-secondary text-white"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>Refine My Idea</span>
                </Button>
                <Button
                  onClick={refineWithClaude}
                  variant="default"
                  className="flex items-center space-x-2 bg-gradient-primary text-white"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>Get Professional Refinement with Claude →</span>
                </Button>
                <Button
                  onClick={() => copyToClipboard(formData.finalIdea)}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Idea</span>
                </Button>
                <Button
                  onClick={downloadIdea}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}