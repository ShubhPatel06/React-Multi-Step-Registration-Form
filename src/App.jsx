import FormContainer from "./components/FormContainer";

function App() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="border-2 p-10 w-[28rem] rounded-md shadow-lg shadow-gray-400">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registration Form
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <FormContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
