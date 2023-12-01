// this component borrowed from https://tailwindui.com/components/application-ui/overlays/slide-overs

export default function SlideOver({ children }) {
  return (
    <>
      {/*overlay */}
      <div
        style={{ zIndex: 9998 }}
        className="fixed inset-0 bg-[#0B1029] bg-opacity-75 transition-opacity"
      ></div>

      {/* modal*/}
      <div style={{ zIndex: 9999 }} className="fixed inset-0 overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen bg-amber-200 max-w-md">
              <div className="flex h-full px-6 border-l text-white flex-col overflow-y-scroll bg-[#0B1029] pb-6 shadow-xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
