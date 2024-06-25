import { Button } from "@/components/ui/button";
import { ContentResultProps } from "@/types";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

export default function OutputSection({ contentResult }: ContentResultProps) {
  const editorRef: any = useRef<Editor>();

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(contentResult);
  }, [contentResult]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here..."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
}
