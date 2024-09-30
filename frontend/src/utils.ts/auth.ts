export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    
    if (!token) return false;
  
    try {
      // Decodificar el token para verificar si ha expirado
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
  
      return currentTime < payload.exp;
    } catch (error) {
      return false;
    }
  };
  