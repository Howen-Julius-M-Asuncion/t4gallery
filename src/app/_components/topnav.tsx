import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="text-x1 flex items-center justify-between border-b p-4 font-semibold">
            <div>Gallery</div>
            <div>Sign In</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}
