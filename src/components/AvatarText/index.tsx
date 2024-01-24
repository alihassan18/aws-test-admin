import React from 'react';
import { IAvatarTextProps } from './avatarText.interface';

export function AvatarText({ text, width, height, color, bg, fontSize, figclassname }: IAvatarTextProps) {
    const colorBg = (key?: string) => {
        let col = '#000';
        switch (key) {
            case 'a':
            case 'g':
            case 'm':
            case 's':
            case 'y':
                col = '#FF5694';
                break;
            case 'b':
            case 'h':
            case 'n':
            case 't':
            case 'z':
                col = '#FB6160';
                break;
            case 'c':
            case 'i':
            case 'o':
            case 'u':
                col = '#B48BF2';
                break;
            case 'd':
            case 'j':
            case 'p':
            case 'v':
                col = '#79CB7C';
                break;
            case 'e':
            case 'k':
            case 'q':
            case 'w':
                col = '#FAA357';
                break;
            case 'f':
            case 'l':
            case 'r':
            case 'x':
                col = '#62D4E3';
                break;
            default:
                col = '#000';
                break;
        }
        return col;
    };

    return (
        <div
            className={`flex items-center ${figclassname} justify-center rounded-full font-bold uppercase`}
            style={{
                width: width ? `${width}px` : '32px',
                height: height ? `${height}px` : '32px',
                color: color ? color : '#fff',
                backgroundColor: bg ? bg : colorBg(text ? text[0].toLowerCase() : ''),
                fontSize: fontSize ? fontSize : '1.2rem',
                fontWeight: '700'
            }}
        >
            <span>{text && text[0]}</span>
        </div>
    );
}
