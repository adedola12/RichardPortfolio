declare module '@/assets/assets' {
  const assets: Record<string, string>;
  export default assets;
}
declare module '../assets/assets' {
  const assets: Record<string, string>;
  export default assets;
}
declare module '../../assets/assets' {
  const assets: Record<string, string>;
  export default assets;
}

export const assets: Record<string, string>;
export const icons: Record<string, string>;