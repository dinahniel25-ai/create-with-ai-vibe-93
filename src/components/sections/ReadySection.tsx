import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Rocket, Sparkles, ExternalLink, Trophy, Target } from 'lucide-react';

const checklist = [
  { id: 'idea', label: 'I have a clear app idea', description: 'Know who, what, style, and features' },
  { id: 'prompt', label: 'My prompt is detailed and specific', description: 'Includes context, function, style, and details' },
  { id: 'tool', label: 'I\'ve chosen my AI platform', description: 'Selected the best tool for my project' },
  { id: 'ready', label: 'I\'m ready to create!', description: 'Excited to bring my vision to life' }
];

const quickLinks = [
  { name: "Lovable AI", url: "https://lovable.dev", color: "primary" },
  { name: "Framer AI", url: "https://framer.com", color: "secondary" },
  { name: "Glide", url: "https://glideapps.com", color: "accent" },
  { name: "Bubble", url: "https://bubble.io", color: "primary" }
];

export default function ReadySection() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const allChecked = checkedItems.length === checklist.length;

  const handleCheck = (itemId: string) => {
    setCheckedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section id="ready" className="section-padding min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-12 h-12 text-accent mr-4" />
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <Trophy className="w-12 h-12 text-secondary ml-4" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to Create?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You've learned the skills, gathered inspiration, and crafted your idea. 
            Now it's time to make magic happen! ✨
          </p>
        </div>
        
        {/* Pre-Launch Checklist */}
        <Card className="mb-12 border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl gradient-text">
              🚀 Pre-Launch Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {checklist.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={item.id}
                    checked={checkedItems.includes(item.id)}
                    onCheckedChange={() => handleCheck(item.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor={item.id} className="font-medium text-foreground cursor-pointer">
                      {item.label}
                    </label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  {checkedItems.includes(item.id) && (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  )}
                </div>
              ))}
            </div>
            
            {allChecked && (
              <div className="mt-8 p-6 bg-gradient-hero/10 rounded-xl text-center animate-bounce-in">
                <h3 className="text-xl font-bold gradient-text mb-2">
                  🎉 All Systems Go!
                </h3>
                <p className="text-muted-foreground">
                  You're fully prepared to create something amazing!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Quick Access to Tools */}
        <Card className="mb-12 border-0 bg-gradient-primary/5">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              <Target className="w-6 h-6 inline-block mr-2" />
              Quick Access to AI Builders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`h-16 ${
                    link.color === 'primary' ? 'bg-gradient-primary' :
                    link.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'
                  } text-white hover:scale-105 transition-transform`}
                >
                  <div className="text-center">
                    <div className="font-bold">{link.name}</div>
                    <ExternalLink className="w-4 h-4 mx-auto mt-1" />
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Final Motivation */}
        <div className="text-center">
          <Card className="border-0 bg-gradient-hero text-white">
            <CardContent className="p-12">
              <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h3 className="text-3xl font-bold mb-6">
                Your Ideas Have Power! 💪
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Every amazing app started with someone like you having a crazy idea and deciding to build it. 
                You have everything you need to create something that could change how people learn, work, or play.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <Badge className="bg-white/20 text-white text-base px-6 py-2">
                  ✨ Dream Big
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-6 py-2">
                  🚀 Start Today
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-6 py-2">
                  🌟 Change the World
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  );
}