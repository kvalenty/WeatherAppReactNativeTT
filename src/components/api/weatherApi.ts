export const loadData = async <T>(url: string): Promise<T> => {
  const responsed = await fetch(url);

  return responsed.json();
};
