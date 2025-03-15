declare module 'react-typewriter-effect' {
    import { FC } from 'react';
  
    interface TypewriterProps {
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
  
    const Typewriter: FC<TypewriterProps>;
  
    export default Typewriter;
  }
  