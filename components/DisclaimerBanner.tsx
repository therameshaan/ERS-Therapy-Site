export default function DisclaimerBanner() {
  return (
    <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 dark:border-red-400 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* Optional icon: exclamation triangle */}
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.581 9.909c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.529 0-2.492-1.646-1.742-2.98l5.581-9.909zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v3H5a1 1 0 100 2h4v3a1 1 0 102 0v-3h4a1 1 0 100-2h-3V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800 dark:text-red-100">
            Important Notice
          </p>
          <p className="mt-1 text-sm text-red-700 dark:text-red-200">
            This application is not a replacement for professional therapy, counseling, or emergency services. If you are in crisis or experiencing thoughts of self-harm, please call or text <strong className="font-medium">988</strong> (Suicide & Crisis Lifeline) immediately, or contact your local emergency services.
          </p>
        </div>
      </div>
    </div>
  );
}