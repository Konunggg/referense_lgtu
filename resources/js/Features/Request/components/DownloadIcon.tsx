import {useState} from "react";
import {mergeClass} from "@/helpers";
import {useOutsideClick} from "@/hooks";
import {Icon} from "@/Components";

type Props = {
  request_id: number
}

export default function XMLDownload({request_id}: Props) {
  const [opened, setOpened] = useState(false);
  const elRef = useOutsideClick<HTMLDivElement>(() => setOpened(false));

  return <div className={mergeClass("dropdown xml-icon-download-dropdown", opened && 'active')} ref={elRef}>
    <button className="director-form__button" onClick={() => setOpened((prev) => !prev)}>
      <svg width="1em" height="1em" viewBox="0 0 515.283 515.283"><path d="M400.775 515.283H114.507c-30.584 0-59.339-11.911-80.968-33.54C11.911 460.117 0 431.361 0 400.775v-28.628c0-15.811 12.816-28.628 28.627-28.628s28.627 12.817 28.627 28.628v28.628c0 15.293 5.956 29.67 16.768 40.483 10.815 10.814 25.192 16.771 40.485 16.771h286.268c15.292 0 29.669-5.957 40.483-16.771 10.814-10.815 16.771-25.192 16.771-40.483v-28.628c0-15.811 12.816-28.628 28.626-28.628s28.628 12.817 28.628 28.628v28.628c0 30.584-11.911 59.338-33.54 80.968-21.629 21.629-50.384 33.54-80.968 33.54zM257.641 400.774a28.538 28.538 0 0 1-19.998-8.142l-.002-.002-.057-.056-.016-.016c-.016-.014-.03-.029-.045-.044l-.029-.029a.892.892 0 0 0-.032-.031l-.062-.062-114.508-114.509c-11.179-11.179-11.179-29.305 0-40.485 11.179-11.179 29.306-11.18 40.485 0l65.638 65.638V28.627C229.014 12.816 241.83 0 257.641 0s28.628 12.816 28.628 28.627v274.408l65.637-65.637c11.178-11.179 29.307-11.179 40.485 0 11.179 11.179 11.179 29.306 0 40.485L277.883 392.39l-.062.062-.032.031-.029.029c-.014.016-.03.03-.044.044l-.017.016a1.479 1.479 0 0 1-.056.056l-.002.002c-.315.307-.634.605-.96.895a28.441 28.441 0 0 1-7.89 4.995l-.028.012c-.011.004-.02.01-.031.013a28.5 28.5 0 0 1-11.091 2.229z" fill="currentColor"/></svg>
    </button>

    <ul className="dropdown__list">
      <li>
        <a href={route('request.excel', [request_id])} target="_blank" className="!flex items-center gap-x-2">
          <Icon icon="excel" size="1.12em" className="!text-green-600"/>
          <span>Excel</span>
        </a>
      </li>
      <li>
        <a href={route('request.xml', {request: request_id, _query: {'doc_type': 'inn'}})} target="_blank" className="!flex items-center gap-x-2">
          <Icon icon="xml" size="1.12em" className="!text-blue-600"/>
          <span>XML с ИНН</span>
        </a>
      </li>
      <li>
        <a href={route('request.xml', {request: request_id, _query: {'doc_type': 'passport'}})} target="_blank" className="!flex items-center gap-x-2">
          <Icon icon="xml" size="1.12em" className="!text-orange-500"/>
          <span>XML с документом</span>
        </a>
      </li>
    </ul>
  </div>
}
