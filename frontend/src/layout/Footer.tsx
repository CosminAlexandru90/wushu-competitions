import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className={'text-right p-6 my-2 bg-blue-950/30 rounded-xl italic text-xs shadow-lg'}>
          Copyright © {new Date().getFullYear()} Federația Română de Wushu Kungfu | Made by Cosmin Alexandru
        </div>
    );
};