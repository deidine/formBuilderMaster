interface ModalProps {
  setOpenModal: (value: boolean, inputType: string) => void;
}export default function Modal({ setOpenModal }: ModalProps) {
    const closeModal = () => {
      setOpenModal(false, "");  
    };
  
    return (
      <>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={closeModal}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div
              className="relative w-full max-w-lg p-4 mx-auto
             bg-white rounded-md shadow-lg"
            >
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Choose the type of input that you want to add
                  </p>
                </h4>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-black border-2  
                      rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                  onClick={() => setOpenModal(false, "text")} // Open modal and pass "text" for input text
                >
                  Input Text
                </button>{" "}
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-black   border-2
                      rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                  onClick={() => setOpenModal(false, "email")} // Open modal and pass "email" for input email
                >
                  Input Email
                </button>{" "}
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md
                       outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={closeModal} // Close modal and reset input type
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  