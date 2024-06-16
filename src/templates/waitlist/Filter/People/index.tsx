import { SearchStyle } from "@/components/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import DynamicSearch from "@/components/DynamicSearch";
import { setfilteredPeopleWaitlist } from "@/redux/waitlist/clientSlice";
import { ClientType } from "@/lib/data";

const People = () => {
  const classNames: SearchStyle = {
    form: "relative rounded-[6px] bg-[#F9FAFB] border border-[#E2E8F0] px-[35px] py-[4px] mb-[16px]",
    iconContainer:
      "pointer-events-none absolute inset-y-0 left-[12px] flex items-center pr-3",
    icon: "w-[16px] h-[16px]",
    iconPath: "stroke-[#3F3F46]",
    input:
      "w-full text-[14px] font-[400] bg-transparent  leading-[20px] text-[#3F3F46] outline-none placeholder:text-[#9CA3AF]",
  };

  const { filteredPeopleWaitlist } = useSelector(
    (state: RootState) => state.waitlist,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleClientSelect = (clients: ClientType[]) => {
    dispatch(setfilteredPeopleWaitlist(clients));
  };

  return (
    <DynamicSearch
      selectedClients={filteredPeopleWaitlist}
      onClientSelect={handleClientSelect}
      classNames={classNames}
      searchLabel="payer"
      hideTags={false}
    />
  );
};

export default People;
