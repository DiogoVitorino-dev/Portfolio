import React, { useEffect, useState } from 'react';

import { CustomTextProps, QuantumText } from '@/components/shared';

interface RepeatedTextProps extends CustomTextProps {
  copies?: number;
}

export default function RepeatedText({ copies, children, ...props }: RepeatedTextProps) {
  const [data, setData] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (children) {
      const newData = new Array(copies || 1);
      setData(newData.fill(children));
    }
  }, [copies, children]);
  return <QuantumText {...props}>{data}</QuantumText>;
}
