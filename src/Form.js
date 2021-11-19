import { CreditCardIcon, KeyIcon, UserCircleIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import { MyDropzone } from './MyDropzone'



export default function Example() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 p-10">


      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">


              <div className="grid grid-cols-3 gap-6">


                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                  <MyDropzone />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}