import pygame
import pygame.camera
from pygame.locals import *
pygame.init()
pygame.camera.init()
camlist = pygame.camera.list_cameras()
cam = pygame.camera.Camera(camlist[0], (640,480))
cam.start()
img = cam.get_image()
import pygame.image
pygame.image.save(img, "photo2.jpg")
pygame.camera.quit()
