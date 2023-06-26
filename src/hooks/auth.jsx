import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [petFavorites, setPetFavorites] = useState([]);

  async function signIn({ email, senha }) {
    try {
      const response = await api.post("/sessions", { email, senha });
      const { token, user } = response.data;

      localStorage.setItem("@adotaJaMarica:user", JSON.stringify(user));
      localStorage.setItem("@adotaJaMarica:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response) {
        toast(err.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao fazer login", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  }

  async function signInGoogle({ email, google_id }) {
    try {
      const response = await api.post("/sessions", { email, google_id });
      const { token, user } = response.data;

      localStorage.setItem("@adotaJaMarica:user", JSON.stringify(user));
      localStorage.setItem("@adotaJaMarica:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response) {
        toast(err.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao fazer login", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@adotaJaMarica:token");
    localStorage.removeItem("@adotaJaMarica:user");
    setData({});
  }

  async function updateProfile({ updateUser, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        data.user.avatar = response.data.avatar;
      }

      if (data.user.telefone === updateUser.telefone) {
        delete updateUser.telefone;
      }

      await api.put("/users", updateUser);

      const user = Object.assign(data.user, updateUser);

      localStorage.setItem("@adotaJaMarica:user", JSON.stringify(user));
      setData({ user, token: data.token });

      toast("Perfil atualizado com sucesso", {
        type: "success",
        hideProgressBar: true,
        autoClose: 3000,
      });
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response) {
        toast(err.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao atualizar perfil", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  }

  async function addFavoritePet(pet_id) {
    try {
      await api.post("/favorites", { pet_id });
      const favorites = getPetFavorites();

      favorites.then((response) => {
        setPetFavorites(response.data);
      });
    } catch (err) {
      if (err.response.data.message) {
        toast(err.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao adicionar pet aos favoritos", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  }

  async function removeFavoritePet(id) {
    try {
      await api.delete(`/favorites/${id}`);
      const favorites = getPetFavorites();

      favorites.then((response) => {
        setPetFavorites(response.data);
      });
    } catch (err) {
      if (err.response.data.message) {
        toast(err.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao remover pet dos favoritos", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  }

  async function getPetFavorites() {
    if (data) {
      return await api.get("/favorites");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@adotaJaMarica:token");
    const user = JSON.parse(localStorage.getItem("@adotaJaMarica:user"));

    if (token && user) {
      const favorites = getPetFavorites();
      favorites.then((response) => {
        setPetFavorites(response.data);
      });
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signInGoogle,
        user: data.user,
        token: data.token,
        signOut,
        updateProfile,
        petFavorites,
        addFavoritePet,
        removeFavoritePet,
        setPetFavorites,
        getPetFavorites,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
