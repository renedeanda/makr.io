import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { copyToClipboard, cn } from '../../lib/utils';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export default function CodeBlock({ code, language, showCopy = true }: CodeBlockProps) {
  const { theme } = useContext(ThemeContext);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="group relative my-4">
      <pre
        className={cn(
          'overflow-x-auto rounded-xl border p-6 text-sm',
          theme === 'dark'
            ? 'border-gray-700 bg-gray-900'
            : 'border-gray-200 bg-gray-50'
        )}
      >
        <code className="font-mono">{code}</code>
      </pre>

      {showCopy && (
        <button
          onClick={handleCopy}
          className={cn(
            'absolute right-4 top-4 rounded-lg p-2 opacity-0 transition-all group-hover:opacity-100',
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              : 'bg-white hover:bg-gray-100 text-gray-700',
            'border',
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          )}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <FaCheck className="h-4 w-4 text-green-500" />
          ) : (
            <FaCopy className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}
