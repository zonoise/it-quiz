import { Choice } from '../types/types';

export const ChoiceButton: React.FC<{ choice: Choice }> = ({ choice }) => {
  return (
    <button className="min-h-12 border-2 bg-yellow-400 rounded-2xl" key={choice.index}>
      <div className="text-gray-800 font-bold h-full flex justify-start items-center p-3">
        <span className="mr-2">{choice.index}</span>
        <span>{choice.body}</span>
      </div>
    </button>
  );
};
