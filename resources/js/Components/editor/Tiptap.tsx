import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";

const Tiptap = ({ onChange, content }: { onChange: (richText: string) => void, content: string }) => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({}),
            Link.configure({
                openOnClick: false,
            })
        ],
        editorProps: {
            attributes: {
                class:
                    `min-h-52 min-w-full prose prose-slate prose-strong:font-black font-light text-sm prose-h3:text-2xl prose-h3:font-light prose-a:text-blue-600 px-4 py-3 leading-5 justify-start border-b border-r border-l border-gray-400 items-start rounded-b-md outline-none`,
            },
        },
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    //console.log(editor?.getHTML());

    return (
        <div className="w-full">
            <Toolbar editor={editor} content={content} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default Tiptap;