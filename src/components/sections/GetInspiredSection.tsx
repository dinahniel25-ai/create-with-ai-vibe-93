import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, GraduationCap, Heart, Shield, Sparkles } from 'lucide-react';

const categories = [
  { id: 'games', label: 'Game-ified Tools', icon: Gamepad2, color: 'primary' },
  { id: 'learning', label: 'Learning & Skills', icon: GraduationCap, color: 'secondary' },
  { id: 'wellness', label: 'Health & Wellness', icon: Heart, color: 'accent' },
  { id: 'safety', label: 'Digital Safety', icon: Shield, color: 'primary' },
];

const ideas = {
  games: [
    {
      title: "Expense Tracker Ludo 🎲",
      description: "Turn budgeting into a board game! Roll dice to move around a money board, collect rewards for saving, and avoid 'impulse purchase' penalty squares.",
      tags: ["Finance", "Gamification", "Visual"]
    },
    {
      title: "Habit Tracker Kho Kho 🏃‍♂️",
      description: "Chase your habits like in Kho Kho! Tag daily habits to score points, create chains of completed tasks, and unlock achievement badges.",
      tags: ["Habits", "Sports", "Progress"]
    },
    {
      title: "Memory Palace Builder 🏰",
      description: "Create virtual rooms to store study notes. Walk through your palace to review, add furniture that represents concepts, and invite friends to explore.",
      tags: ["Memory", "3D", "Collaborative"]
    }
  ],
  learning: [
    {
      title: "Code Practice Arena ⚔️",
      description: "Battle coding challenges in a medieval arena! Each solved problem unlocks new weapons, and you can duel other learners in coding competitions.",
      tags: ["Coding", "Competition", "RPG"]
    },
    {
      title: "Language Learning Cards 🃏",
      description: "Magic trading card game for vocabulary! Collect word cards, create spell combinations with grammar, and battle monsters using sentences.",
      tags: ["Languages", "Cards", "Magic"]
    },
    {
      title: "Math Quest Adventure 🗺️",
      description: "Explore a fantasy world where math problems unlock treasure chests, solve equations to cast spells, and rescue kingdoms with calculus!",
      tags: ["Math", "Adventure", "Fantasy"]
    }
  ],
  wellness: [
    {
      title: "Mood Weather App 🌤️",
      description: "Your emotions as weather patterns! Track daily mood climates, see emotional forecasts, and get personalized 'weather reports' with coping strategies.",
      tags: ["Mental Health", "Visualization", "Tracking"]
    },
    {
      title: "Exercise Buddy Pet 🐾",
      description: "Virtual pet that grows stronger with your workouts! Feed it with completed exercises, watch it evolve, and compete with friends' pets.",
      tags: ["Fitness", "Virtual Pet", "Social"]
    },
    {
      title: "Sleep Sanctuary Builder 🌙",
      description: "Design your perfect digital bedroom for better sleep. Customize ambient sounds, lighting, and guided meditation spaces that adapt to your sleep patterns.",
      tags: ["Sleep", "Ambience", "Meditation"]
    }
  ],
  safety: [
    {
      title: "Password Strength Trainer 🔐",
      description: "Gamify password security! Create passwords that defeat different 'hacker monsters', learn about security through mini-games, and build your digital fortress.",
      tags: ["Security", "Education", "Interactive"]
    },
    {
      title: "Scam Detective Game 🕵️",
      description: "Become a digital detective! Analyze fake emails, texts, and websites to spot scams. Level up your detection skills and protect your community.",
      tags: ["Scam Prevention", "Detective", "Awareness"]
    },
    {
      title: "Privacy Guardian 🛡️",
      description: "Manage your digital footprint like a superhero! See what data you're sharing, get privacy power-ups, and protect your online identity.",
      tags: ["Privacy", "Superhero", "Protection"]
    }
  ]
};

export default function GetInspiredSection() {
  const [activeCategory, setActiveCategory] = useState('games');

  return (
    <section id="get-inspired" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Get Inspired
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out these creative ideas to spark your imagination! 
            Click on any category to explore amazing project possibilities.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas[activeCategory as keyof typeof ideas].map((idea, index) => (
            <Card 
              key={index}
              className="hover-lift border-0 bg-card/80 backdrop-blur-sm group cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {idea.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {idea.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-accent p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 mr-2" />
              <h3 className="text-2xl font-bold">
                Your Turn to Innovate!
              </h3>
              <Sparkles className="w-6 h-6 ml-2" />
            </div>
            <p className="text-lg opacity-90">
              These are just starting points! Mix and match ideas, add your own twist, 
              or create something completely new. The best apps come from solving real problems in creative ways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}