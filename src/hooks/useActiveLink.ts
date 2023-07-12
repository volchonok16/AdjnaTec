import {useMatch, useResolvedPath} from 'react-router-dom';

export const useActiveLink = (path: string): any => {
    const resolvedPath = useResolvedPath(path);
    return useMatch({path: resolvedPath.pathname, end: true});
};