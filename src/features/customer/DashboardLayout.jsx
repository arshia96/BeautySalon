import Loading from "../../ui/Loading";

function DashboardLayout() {
    // const {isLoading, proposals} = useProposals();
    // if (isLoading) return <Loading />
    return (
    <div>
      <div className="text-center">
        <p className="text-bold text-2xl text-secondary-900">صفحه داشبورد</p>
      </div>
      <p className="text-bold text-2xl text-secondary-900">راست ترین</p>
      <p className="text-bold text-2xl text-secondary-900 text-left">چپ ترین</p>
      {/* <Stats proposals = {proposals} /> */}
    </div>
  )
}

export default DashboardLayout;