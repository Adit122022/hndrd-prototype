import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 glass-panel p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mt-16">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground font-syne">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Join Koxtons for an elite shopping experience
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-foreground">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="block w-full rounded-md border-0 py-2 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-foreground">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="pt-2 border-t border-border mt-4">
              <p className="text-xs text-muted-foreground mb-2">Optional B2B Information</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-medium leading-6 text-foreground">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-xs sm:leading-6"
                  />
                </div>
                <div>
                  <label htmlFor="gst" className="block text-xs font-medium leading-6 text-foreground">
                    GST Number
                  </label>
                  <input
                    id="gst"
                    name="gst"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary bg-background/50 sm:text-xs sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-primary py-3 px-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-[0.98]"
            >
              Sign up
            </button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
