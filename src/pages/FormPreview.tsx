

type InputData = {
    element?: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
  };
  
  type FormPreviewProps = {
    data: InputData[];
  };
  
  const FormPreview: React.FC<FormPreviewProps> = ({ data }) => {
    return (
      <div className="max-w-2xl mx-auto mt-3 border shadow rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Form Preview</h2>
        <form className="p-4 border border-gray-300 rounded-lg">
          {data.map((input, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium mb-1">
                {input.label}
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type={input.type}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };