const formatTokenList = (tokenList: any[]) =>
  tokenList
    ?.filter((item: any) => item.s.endsWith("USDT") && item.c >= 1)
    ?.map((item: any) => ({
      originalSymbol: item.s,
      symbol: item.s.replace("USDT", ""),
      price: parseInt(item.c).toFixed(2),
    }))
    ?.sort((a: any, b: any) => (a.symbol > b.symbol ? 1 : -1));

export default formatTokenList;
