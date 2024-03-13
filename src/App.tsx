import { TestComponent } from './components/test-component.tsx'

const App = () => {
  return (
    <div className="bg-gray-600 w-full h-full flex justify-center items-center">
      <TestComponent hello="hello vite/typescript." />
      
    </div>
  );
};

export default App