import { type Editor } from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Undo,
    Redo,
    Code,
    Heading3,
    Link2Icon,
    Link2OffIcon,
} from "lucide-react";
import { useCallback } from "react";

type Props = {
    editor: Editor | null;
    content: string;
};


const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
        return null;
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])
    return (
        <div
            className="flex flex-wrap items-start justify-between w-full gap-5 px-4 py-3 border border-gray-400 rounded-tl-md rounded-tr-md"
        >
            <div className="flex flex-wrap items-center justify-start w-full gap-2 lg:w-10/12 ">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={
                        editor.isActive("bold")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Bold className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={
                        editor.isActive("italic")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Italic className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={
                        editor.isActive("strike")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Strikethrough className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 3 }).run();
                    }}
                    className={
                        editor.isActive("heading", { level: 3 })
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Heading3 className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        const previousUrl = editor.getAttributes('link').href
                        const url = window.prompt('Enter the URL:', previousUrl);

                        if (url) {
                            editor.chain().focus().setLink({ href: url }).run();
                        }
                    }}
                    className={
                        editor.isActive("link")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Link2Icon className="w-4 h-4" />
                </button>

                {editor.isActive("link") &&
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            editor.chain().focus().unsetLink().run()
                        }}
                        className="p-2 text-black bg-white rounded-lg"
                    >
                        <Link2OffIcon className="w-4 h-4" />
                    </button>
                }
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={
                        editor.isActive("bulletList")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <List className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={
                        editor.isActive("orderedList")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <ListOrdered className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setCode().run();
                    }}
                    className={
                        editor.isActive("code")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Code className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().undo().run();
                    }}
                    className={
                        editor.isActive("undo")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Undo className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().redo().run();
                    }}
                    className={
                        editor.isActive("redo")
                            ? "bg-black text-white p-2 rounded-lg"
                            : "bg-white text-black p-2 rounded-lg"
                    }
                >
                    <Redo className="w-4 h-4" />
                </button>
            </div>
            {/* {content && (
                <button
                    type="submit"
                    className="px-4 py-2 text-white rounded-md bg-sky-700"
                >
                    Add
                </button>
            )} */}
        </div>
    );
};

export default Toolbar;