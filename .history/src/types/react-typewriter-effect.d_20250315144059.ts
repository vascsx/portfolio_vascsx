declare module 'react-typewriter-effect' {
  import * as React from 'react';

  export interface TypewriterProps {
    textStyle?: React.CSSProperties;
    startDelay?: number;
    cursorColor?: string;
    multiText?: string[];
    multiTextDelay?: number;
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
  }

  const Typewriter: React.FC<TypewriterProps>;

  export default Typewriter;
}
