import { useState } from 'react';

function useOrderItem(): [boolean, (showDetails: boolean) => void] {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return [showDetails, setShowDetails];
}

export default useOrderItem;
