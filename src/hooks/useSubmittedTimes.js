import { getSubmittedTimes } from "../services/customerService";

export default function useSubmittedTimes() {
    const data = getSubmittedTimes();
    return data;
}