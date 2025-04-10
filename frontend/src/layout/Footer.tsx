import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className={'text-right p-8 bg-blue-300 italic text-xs'}>
          Copyright © {new Date().getFullYear()} Federația Română de Wushu Kungfu | Made by Cosmin Alexandru
        </div>
    );
};