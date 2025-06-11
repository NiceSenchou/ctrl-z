import { Search, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-gray-900">ctrl.z</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="text" placeholder="Search" className="pl-10 bg-gray-50 border-gray-200 focus:bg-white" />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Discover
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Project Gallery
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Community
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                CTRL+View
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* My Projects Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">My Projects</h2>
          <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
            View All
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-32">
          <div className="text-center max-w-md">
            <p className="text-gray-500 text-lg mb-2">Looks like your project space is a little quiet.</p>
            <p className="text-gray-400 mb-8">Find something exciting to work on</p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">
              Explore Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex space-x-8">
            <button className="text-lg font-medium text-gray-900 border-b-2 border-gray-900 pb-2">
              Projects for You
            </button>
            <button className="text-lg font-medium text-gray-400 hover:text-gray-600 pb-2">Community Spotlight</button>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="sm" variant="outline" className="bg-white shadow-lg border-gray-200 hover:bg-gray-50">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat
        </Button>
      </div>
    </div>
  )
}
