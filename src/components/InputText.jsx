import { Label, TextInput, Textarea } from "flowbite-react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import React from "react";
import { useRef, useMemo } from "react";

import dynamic from "next/dynamic";

export default function InputText({
  type = "text",
  id,
  typeInput = "text",
  title,
  placeholder,
  ref,
  value,
  onChange,
}) {
  switch (type) {
    case "textarea":
      // input textarea
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={id} value={title} />
          </div>
          <Textarea
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
        </div>
      );

    case "rich":
      const editor = useRef(null);

      const config = useMemo(
        () => ({
          readonly: false,
          placeholder: placeholder || "Tulis disini...",
        }),
        [placeholder]
      );

      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={id} value={title} />
            <JoditEditor
              ref={editor}
              value={value}
              onChange={onChange}
              name={id}
              config={config}
              tabIndex={1}
            />
          </div>
        </div>
      );

    default:
      // input text
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={id} value={title} />
          </div>
          <TextInput
            id={id}
            type={typeInput}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
        </div>
      );
  }
}
