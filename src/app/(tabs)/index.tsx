import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera/next";

export default function Home() {
  const { width } = Dimensions.get("screen");

  const [axisPosition, setAxisPosition] = useState({
    translateX: 0,
    translateY: 0,
  });
  const [scale, setScale] = useState({
    scaleX: 160,
    scaleY: 160,
  });
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (permission?.status === "granted") return;
    requestPermission();
  }, []);

  const handleQrCodeRead = (data: any) => {
    setScale({
      scaleX: data.boundingBox.size.width * 1.2,
      scaleY: data.boundingBox.size.height * 1.2,
    });

    const sumReducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;

    let avgX = data.cornerPoints
      .map((point: { x: number; y: number }) => point.x)
      .reduce(sumReducer, 0);
    let avgY = data.cornerPoints
      .map((point: { x: number; y: number }) => point.y)
      .reduce(sumReducer, 0);

    setAxisPosition({
      translateX: avgX / 4,
      translateY: avgY / 4,
    });
  };

  return (
    <View>
      <CameraView
        barcodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
        onBarcodeScanned={(data: any) => handleQrCodeRead(data)}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            start: width / 3.5,
            height: scale.scaleY,
            width: scale.scaleX,
            left: axisPosition.translateX - scale.scaleX / 2,
            top: axisPosition.translateY - scale.scaleY / 2,
            borderWidth: 2,
            borderColor: "#FFF",
            borderRadius: 10,
          }}
        />
      </CameraView>
    </View>
  );
}
