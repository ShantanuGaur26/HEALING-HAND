import React, {
    createContext,
    useContext,
    useMemo,
    useEffect,
    ReactNode,
  } from "react";
  import { io, Socket } from "socket.io-client";
  
  // Define the context type
  const SocketContext = createContext<Socket | null>(null);
  
  // Custom hook to use the socket
  export const useSocket = () => {
    const socket = useContext(SocketContext);
    if (!socket) {
      throw new Error("useSocket must be used within a SocketProvider");
    }
    return socket;
  };
  
  // Props interface for the provider
  interface SocketProviderProps {
    children: ReactNode;
  }
  
  export const SocketProvider = ({ children }: SocketProviderProps) => {
    const socket = useMemo(() => io("http://localhost:8000"), []);
  
    return (
      <SocketContext.Provider value={socket}>
        {children}
      </SocketContext.Provider>
    );
  };
  