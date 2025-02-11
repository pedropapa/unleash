import { useMemo } from 'react';
import { formatApiPath } from 'utils/formatPath';
import handleErrorResponses from '../httpErrorResponseHandler';
import { useConditionalSWR } from '../useConditionalSWR/useConditionalSWR';
import useUiConfig from '../useUiConfig/useUiConfig';
import { useUiFlag } from 'hooks/useUiFlag';
import { IInternalBanner } from 'interfaces/banner';

const ENDPOINT = 'api/admin/banners';

export const useBanners = () => {
    const { isEnterprise } = useUiConfig();
    const bannersEnabled = useUiFlag('banners');

    const { data, error, mutate } = useConditionalSWR(
        isEnterprise() && bannersEnabled,
        { banners: [] },
        formatApiPath(ENDPOINT),
        fetcher,
    );

    return useMemo(
        () => ({
            banners: (data?.banners ?? []) as IInternalBanner[],
            loading: !error && !data,
            refetch: () => mutate(),
            error,
        }),
        [data, error, mutate],
    );
};

const fetcher = (path: string) => {
    return fetch(path)
        .then(handleErrorResponses('Banners'))
        .then((res) => res.json());
};
