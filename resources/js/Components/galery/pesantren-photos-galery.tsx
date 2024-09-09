import { useCallback, useState } from "react"
import ImageVIewer from "react-simple-image-viewer"
export default function PesantrenPhotosGalery({ photos }: { photos: { file: string }[] }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index)
        setIsViewerOpen(true)
    }, [])
    const closeImageViewer = () => {
        setCurrentImage(0)
        setIsViewerOpen(false)
    }
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                {photos.map((src, index) => (
                    <img
                        src={src.file}
                        onClick={() => openImageViewer(index)}
                        key={index}
                        style={{ height: '200px' }}
                        alt=""
                    />
                ))}
            </div>

            {isViewerOpen && (
                <ImageVIewer
                    src={photos.map(photo => photo.file)}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    )
}