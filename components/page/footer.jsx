import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32">
            {/* <div>
                <h1 className="text-xl font-bold">Music<span className="opacity-50">hub</span></h1>
            </div> */}
            <p className="text-sm text-muted-foreground">Built for educational purpose. Made with ♥ by <a className="underline text-primary hover:text-primary" href="https://www.shanlaksh.space">☠Shanlaksh</a>.</p>
        </footer>
    )
}
