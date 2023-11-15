export default function Join() {
    return (
    <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Full Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your full name"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Join
        </button>
    </form>
    ) 
}