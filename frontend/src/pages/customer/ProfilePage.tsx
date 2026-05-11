import Button from '../../components/common/Button';

function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">My profile</h1>
        <p className="mt-2 text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <h2 className="text-xl font-semibold text-white">Account information</h2>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-slate-500">Name</p>
              <input type="text" defaultValue="Aiden Clark" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <input type="email" defaultValue="aiden@saasmarket.com" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
            </div>
          </div>
          <Button className="mt-6">Save changes</Button>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Preferences</h2>
            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 text-slate-300">
                <input type="checkbox" defaultChecked className="rounded-full" />
                <span>Email notifications</span>
              </label>
              <label className="flex items-center gap-3 text-slate-300">
                <input type="checkbox" defaultChecked className="rounded-full" />
                <span>Order updates</span>
              </label>
              <label className="flex items-center gap-3 text-slate-300">
                <input type="checkbox" className="rounded-full" />
                <span>Marketing emails</span>
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-rose-500/20 bg-rose-500/5 p-8 shadow-lg shadow-rose-950/20">
            <h2 className="text-xl font-semibold text-white">Danger zone</h2>
            <p className="mt-2 text-sm text-slate-400">Once you delete your account, there is no going back.</p>
            <Button className="mt-4" variant="ghost">Delete account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
