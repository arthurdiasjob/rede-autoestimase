import { useState, useEffect } from "react";
import api from "../configs/api";

export interface User {
  _id: string;
  nome: string;
  email: string;
}

export interface NewsItem {
  _id: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  dataPublicacao: string;
  link: string;
  veiculoMidia: string;
  ativo: boolean;
  usuarioCadastro: User;
  dataCadastro: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UseNewsReturn {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useNews = (): UseNewsReturn => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get("/news", {
        params: {
          ativas: true,
        },
      });

      setNews(response.data);
    } catch (err) {
      console.error("Erro ao buscar notícias:", err);
      setError("Erro ao carregar notícias. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    news,
    loading,
    error,
    refetch: fetchNews,
  };
};
