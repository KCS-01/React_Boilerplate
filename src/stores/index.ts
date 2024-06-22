import { create } from "zustand";

import { createModalState, IModalState } from "./createModalState";

/**
 * return 부분에 가져온 store 함수를 실행시켜주세요
 */

export const useStores = create<IModalState>((...set) => {
    return {
        ...createModalState(...set),
    };
});
