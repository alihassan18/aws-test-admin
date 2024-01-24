import { MentionsInput, Mention, OnChangeHandlerFunc } from "react-mentions";
import React, {
  useEffect,
  useState,
  useCallback,
  useRef /* useMemo */,
} from "react";
import { UseFormSetValue } from "react-hook-form";
import classNames from "./mentioned.module.css";
import RepliesMention from "./RepliesMention.module.css";
import Mentions from "./Mentions";
import HashTags from "./HashTags";
interface Iprops {
  disabled?: boolean;
  leftAlign?: boolean;
  group?: any;
  styles?: string;
  placeHolder?: string;
  singleLine?: boolean;
  autoFocus?: boolean;
  textsize?: string;
  content: string;
  isFileUploaded?: boolean;
  replies?: boolean;
  onChange: OnChangeHandlerFunc | undefined;
  handleKeyDown: Function;
  handleKeyUp: Function;
  getLinkPreview: Function;
  setValue?: UseFormSetValue<ICreatePost>;
  hovertop: boolean;
  selectedComment?: Comment;
}
interface ILinkPreview {
  url?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}
type SuggestionDataItem = {
  displayName: string;
  id: string;
};

const defaultStyle = (hovertop: Boolean) => ({
  control: {
    width: "100%",
    border: "0px",
  },

  suggestions: {
    marginTop: "30px",
    marginLeft: "10px",
    borderRadius: "10px",
    zIndex: "100",
    "&singleLine": {
      display: "inline-block",
      width: 180,

      highlighter: {
        padding: 1,
        border: "2px inset transparent",
      },
      input: {
        focus: "outline-none",
        padding: 1,
        border: "2px inset",
      },
    },
    "&multiLine": {
      control: {
        fontFamily: "monospace",
        minHeight: 63,
      },
      highlighter: {
        padding: 9,
        border: "1px solid transparent",
      },
      input: {
        focus: "outline-none",
        padding: 9,
        border: "1px solid silver",
      },
    },

    item: {
      padding: "7px 12px",
      borderBottom: "1px solid #2b2b3a",

      "&focused": {
        backgroundColor: "#202327",
      },
    },
  },
});

const MentionedInput = ({
  disabled,
  group,
  styles,
  placeHolder,
  singleLine,
  autoFocus,
  content,
  isFileUploaded,
  onChange,
  setValue,
  replies,
  handleKeyDown,
  handleKeyUp,
  hovertop,
  selectedComment,
}: Iprops) => {
  const [linkPreview, setLinkPreview] = useState<ILinkPreview>();
  const [embededComponent, setEmbededComponent] = useState<
    Element | unknown | null
  >(null);
  const [backupLinkPreview, setBackupLinkPreview] = useState<ILinkPreview>();
  const inputRef = useRef();
  const webRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/;

  // const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [selectedComment]);

  // --------- METADATA LINK EXTRACTER --------------------------------

  function extractUrls(content: string) {
    const regex =
      /(?:^|\s)((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(?:\/\S*)?)/g;

    return content.match(regex) || [];
  }
  const fetchUsers = [{ name: "saqi" }, { name: "ali" }];
  const fetchHashtags = [{ name: "saqi" }, { name: "ali" }];
  return (
    // <div>
    <div className={`${styles} h-full`}>
      <div className={`AtMention h-full`}>
        <MentionsInput
          autoFocus={autoFocus}
          autoComplete="off"
          id="mention-input"
          maxLength={300}
          value={content}
          // onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={onChange}
          style={defaultStyle(hovertop)}
          singleLine={singleLine}
          classNames={replies ? RepliesMention : classNames}
          placeholder={placeHolder}
          //   inputRef={inputRef}
        >
          <Mention
            trigger="@"
            data={fetchUsers}
            displayTransform={(id: string, display: string) => `@${display}`}
            markup="@[__display__](__id__)"
            className={classNames.mentions__mention}
            renderSuggestion={(entry: any) => {
              return <Mentions entry={entry} />;
            }}
          />
          <Mention
            trigger="#"
            data={fetchHashtags}
            displayTransform={(id, display) => `#${display}`}
            markup="#[__display__](__id__)"
            className={classNames.mentions__mention}
            renderSuggestion={(entry: any) => {
              return <HashTags entry={entry} />;
            }}
          />
          <Mention
            trigger=":"
            markup="__id__"
            data={(search) => console.log(search, "sdsd")}
            regex={webRegex}
            className={classNames.mentions__mention}
          />
          {/* there ccommited code i pasted at bottom */}
        </MentionsInput>
      </div>
    </div>
  );
};

export default MentionedInput;
